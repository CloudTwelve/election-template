import React from 'react';
import './ToggleBar.css';

const ToggleBar = (props) => {
    return (
        <div class="message">
        <label for="runner-choice">You're viewing:</label>
            <select id="runner-choice" name="runner-choice">
                <option value="presidential">Presidential</option>
                <option value="secretarial">Secretarial</option>
                <option value="treasurial">Treasurial</option>
            </select>
        </div>
    );
};