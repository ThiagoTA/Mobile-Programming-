import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonSkill, TextSkill } from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <ButtonSkill 
        {...rest}
        >
          <TextSkill>{skill}</TextSkill>
        </ButtonSkill>
    )
}

