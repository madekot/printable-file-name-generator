type ResetHandler = () => void;

export const observerReset = {
  _handlers: new Set<ResetHandler>(),
  subscribe: (handler: ResetHandler) => {
    observerReset._handlers.add(handler);
    return () => {
      observerReset._handlers.delete(handler);
    };
  },
  unsubscribe: (handler: ResetHandler) => {
    observerReset._handlers.delete(handler);
  },
  resetAll: () => observerReset._handlers.forEach((handler) => handler()),
};
