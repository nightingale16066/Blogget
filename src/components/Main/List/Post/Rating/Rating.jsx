import React from 'react';
import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Rating = ({ups}) => {
  console.log();
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рейтинг'/>
      <Text As='p'
        fontWeight='bold'
        className={style.ups}
        size={12}
        tsize={16}
        color='grey99'
      >
        {ups}
      </Text>
      <button className={style.down} aria-label='Понизить рейтинг'/>
    </div>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
};
