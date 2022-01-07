export const checkInputContent = (payload) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({ type: 'CHECKINPUT', payload: payload })
      }, 0)
    }
  }
  
export const toBacklog = (payload) => {
  return (dispatch, getState) => {
    const newContent = [...getState().content.backlogContent];
    newContent.push(payload);
    setTimeout(() => {
      dispatch({ type: 'TOBACKLOG', payload: newContent });
      dispatch(checkInputContent(""));
    }, 50);
  };
};

export const toInProgress = (payload) => {
  return (dispatch, getState) => {
    let newContent = [...getState().content.inProgressContent];
    newContent.push(payload);
    setTimeout(() => {
      dispatch({ type: "TOINPROGRESS", payload: newContent });
      newContent = [...getState().content.backlogtask];
      newContent.pop(payload);
      console.log(newContent);
      dispatch({ type: "TOBACKLOG", payload: newContent });
    }, 50);
  };
};

export const toEvaluation = (payload) => {
  return (dispatch, getState) => {
    let newContent = [...getState().content.evaluationContent];
    newContent.push(payload);
    setTimeout(() => {
      dispatch({ type: "TOEVALUATION", payload: newContent });
      newContent = [...getState().content.inProgressContent].filter((el) => {
        return el !== payload;
      });
      dispatch({ type: "TOINPROGRESS", payload: newContent });
    }, 50);
  };
};

export const toDone = (payload) => {
  return (dispatch, getState) => {
    let newContent = [...getState().content.doneContent];
    newContent.push(payload);
    setTimeout(() => {
      dispatch({ type: "TODONE", payload: newContent });
      newContent = [...getState().content.evaluatetask].filter((el) => {
        return el !== payload;
      });
      dispatch({ type: "TOEVALUATION", payload: newContent });
    }, 50);
  };
};

export const toClear = (payload) => {
  return (dispatch, getState) => {
    let newContent = [...getState().content.doneContent].filter((el) => {
      return el !== payload;
    });

    setTimeout(() => {
      dispatch({ type: "donetoclear", payload: newContent });
    }, 50);
  };
};