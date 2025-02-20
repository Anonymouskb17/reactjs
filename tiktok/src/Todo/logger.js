function Logger(reducer) {
  return (preState, action) => {
    console.group(action.type); // in nhóm ra các trường hợp action
    console.log(preState);
    console.log(action);

    const newState = reducer(preState, action);

    console.groupEnd(); // kết thúc in nhóm

    return newState;
  };
}

export default Logger;
