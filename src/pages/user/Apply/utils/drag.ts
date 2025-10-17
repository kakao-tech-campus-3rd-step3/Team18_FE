export const updateSelectedState = (
  selectedStates: boolean[],
  startIndex: number,
  selectedIndex: number,
  selectionMode: boolean,
): boolean[] => {
  const start = Math.min(startIndex, selectedIndex);
  const end = Math.max(startIndex, selectedIndex);

  return selectedStates.map((isSelected, index) =>
    index >= start && index <= end ? selectionMode : isSelected,
  );
};
