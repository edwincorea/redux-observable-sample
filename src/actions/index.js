export const LOAD_STORIES = "LOAD_STORIES";
export const CLEAR_STORIES = "CLEAR_STORIES";

export const loadStories = () => {
    return {
        type: LOAD_STORIES        
    };
};

export const clear = () => {
    return {
        type: CLEAR_STORIES        
    };
};