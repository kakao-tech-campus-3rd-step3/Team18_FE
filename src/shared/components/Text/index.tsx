import styled from '@emotion/styled';
import React from 'react';
import { theme } from '@/app/styles/theme';

interface TextProps {
  size?: FontSizeKey;
  weight?: FontWeightKey;
  children: React.ReactNode;
  color?: string;
}

export const Text = ({
  size = 'base',
  weight = 'regular',
  color = '#000000',
  children,
}: TextProps) => {
  return (
    <StyledText size={size} weight={weight} color={color}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.div<{ size: FontSizeKey; weight: FontWeightKey; color: string }>`
  font-size: ${({ theme, size }) => theme.font.size[size]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  color: ${({ color }) => color};
  white-space: normal;
  line-height: 1.5;
`;

type FontSizeKey = keyof typeof theme.font.size;
type FontWeightKey = keyof typeof theme.font.weight;
