const mapHydrationHeadlineProps = (state) => {
  return {
    bake: state.bake,
    size: state.size,
    theme: state.theme,
    hydration: state.hydration,
  };
};

export default mapHydrationHeadlineProps;
