export const updateObject = (oldObject, updatedElements) => {
  return {
    ...oldObject,
    ...updatedElements,
  };
};
