module.exports = ({incoming}) => {
  const { path } = incoming;

  const pathRelatedThings = {
    'apply-business-logic': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'verify-object': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'verify-string': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'verify-array': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'verify-everything': () => {
      return `I don't do this yet, but I will soon!`;
    }
  };

  // Do path related things
  // ----------------------
  if(path != null && pathRelatedThings[path]) return pathRelatedThings[path]();

  return `Hey, I'll let you know what I figure out about your data!`;
};