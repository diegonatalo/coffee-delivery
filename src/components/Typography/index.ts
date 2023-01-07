import styled from 'styled-components'

interface TitleTextProps {
  color?: 'title' | 'subtitle' | 'text'
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  weight?: '700' | '800'
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`

interface RegularTextProps {
  color?: 'text' | 'subtitle' | 'label'
  size?: 's' | 'm' | 'l'
  weight?: '400' | '700'
}

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
