/** In this file the functions to subscribe to a certain element are defined. For subscription we mean the following:
 *
 * - We need to be able to subscribe a function to a state's element
 * - the function will be trigger always this state changes
 * - this will let us to change related elements in the frontview as soon as the element has changed
 *
 * This system works as following:
 *
 * @subscribeToRedux: it is a function that updates our "subscriberList". A subscribe list is a list of
 * functions that we expect to be executed after an specific element of the store has been modified. At the end, we
 * return a function that will remove the subscribed element.
 *
 * @initSubscriptions: Inits the subscription item. As a prerequisite, we need to have an element called "LAST_ACTION"
 * stored in our store in redux. This element stores the last action that the store has done, and it should be updated
 * in ALL the reducers for the elements that we want to add to the subscriptions.
 *
 * To init the subscriptions, we will subscribe to redux a SINGLE function. This function is a wrapper: it will be
 * executed each time that an element of the store has been changed. If that happens, the function will check
 * "LAST_ACTION" object inside the store and compare with the subscriberList elements; if an element is subscribed to
 * the same action that exists in "LAST_ACTION", its function will be executed.
 **/

const R = require('ramda');
const NO_ACTION = "NO_ACTION";

let idCounter      = 0;  // last id we had to subscribe
let subscriberList = [];
let store;
let LAST_ACTION    = NO_ACTION;



/**
 * We init the subscription system.
 */
let initSubscriptions = myStore => {
    // console.log("init subscriptions store", store);
    store = myStore;
    store.subscribe(checkChangeSubscriptors(store));
};


/**
 * loops in the subscriberList and does the functions related with the current action that was executed
 * @param store
 */
let checkChangeSubscriptors = store => () => {
    let state = store.getState(); // .appSettings; // we have defined the state as children of user settings
    // for each subscriber in the subscriber list, check if the subscriber has a subscriptio
    R.map(
        ({subscriberAction, subscriberSection, subscriberFunction}) => {
            if (LAST_ACTION === subscriberAction){
                // subscriberFunction(state[subscriberSection]);
                subscriberFunction(state); // now we dont use sections because its a more global and complex store
            }
        },
        subscriberList
    );
    LAST_ACTION = NO_ACTION; // after the subscripton has been done, we update the last action to none
};


let subscribeToRedux = (action, subscriberFunction) => {
    // this works as a decorator of the function so it is only executed when the proper action is trigger
    let subscriberId = idCounter++;

    if (R.filter(el => el.subscriberAction === action && el.subscriberFunction === subscriberFunction, subscriberList).length > 0){
        // this should control if we are subscribing the same function to the same action to avoid repetitions
        console.warn("this function was already subscribed to the action " + action, subscriberFunction);
        return R.T;
    }

    // append to the subscribers' list
    subscriberList.push({
        subscriberId:       subscriberId, // an id for the relation action-function
        subscriberAction:   action, // the action that have to be done to the function to be executed
        // subscriberSection:  getStateSection(action), // the specific part of the store we want to use // todo: we might deprecate this
        subscriberFunction: subscriberFunction, // the function that we want to execute
    });

    // creates and returns the unsubscribe function
    return () => subscriberList = R.reject(subscriberEl => subscriberEl.subscriberId === subscriberId, subscriberList);
};

const updateStoreActions = lastAction => {
    // remember to update the last action again when its done.
    LAST_ACTION = lastAction;
};

const cleanSubscriptions = () => { // todo: do this in the logout
    console.log("cleaning subscriptions");
    idCounter      = 0;
    subscriberList = [];
};


module.exports = {
    initSubscriptions,
    subscribeToRedux,
    updateStoreActions,
    cleanSubscriptions,
};
