import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

type Props = {
    title: string
}

const SectionTitle = ({title}: Props) => {
    return (
        <h1 className="songsTitle">{title}</h1>
    );
}

export default SectionTitle;

SectionTitle.propTypes = {
    title: PropTypes.string
}