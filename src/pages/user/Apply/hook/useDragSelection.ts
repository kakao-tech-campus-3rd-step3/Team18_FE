import { useRef, useState } from 'react';
import { getSign, type Sign } from '../utils/math';

export function useDragSelection(onSelectEnd: () => void, timeIntervalArray: [string, string][]) {
  const [prevDiffSign, setPrevDiffSign] = useState<Sign>(0);
  const startIndex = useRef<string | undefined>('');
  const lastHoveredIndex = useRef<string | null>(null);
  const mode = useRef<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const selectedIndex = useRef<string | undefined>('');
  const [selectedTime, setSelectedTime] = useState<boolean[]>(() =>
    new Array(timeIntervalArray.length).fill(false),
  );

  function handleIndexChange(newIndex: number) {
    const diff = newIndex - Number(lastHoveredIndex.current);
    const currentSign = getSign(diff);

    if (prevDiffSign !== 0 && currentSign !== 0 && currentSign !== prevDiffSign) {
      mode.current = !mode.current;

      if (currentSign < 0) {
        startIndex.current = String(newIndex + 1);
      } else if (currentSign > 0) {
        startIndex.current = String(newIndex - 1);
      }
    }
    setPrevDiffSign(currentSign);
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setIsMouseDown(true);

    startIndex.current = e.currentTarget.dataset.index;
    if (startIndex.current) mode.current = !selectedTime[Number(startIndex.current)];

    const newValue = [...selectedTime];
    newValue[Number(startIndex.current)] = mode.current;

    setSelectedTime(newValue);
    lastHoveredIndex.current = String(startIndex.current);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!isMouseDown) return;
    setIsDragging(true);

    selectedIndex.current = e.currentTarget.dataset.index;
    if (!e.currentTarget.dataset.index || selectedIndex.current === lastHoveredIndex.current)
      return;

    handleIndexChange(Number(selectedIndex.current));

    setSelectedTime((prev) => {
      const newSelected = [...prev];
      const start = Math.min(Number(startIndex.current), Number(selectedIndex.current));
      const end = Math.max(Number(startIndex.current), Number(selectedIndex.current));

      for (let i = start; i <= end; i++) {
        newSelected[i] = mode.current;
      }
      return newSelected;
    });
    lastHoveredIndex.current = selectedIndex.current!;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsMouseDown(false);
    setIsDragging(false);

    onSelectEnd();

    handleIndexChange(Number(selectedIndex.current));
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    selectedTime,
  };
}
