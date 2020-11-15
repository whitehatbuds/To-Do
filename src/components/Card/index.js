import React from 'react';
import { Card as SemanticCard, Icon } from "semantic-ui-react";


const Card =  ({id , color, task}) => {

    const updateTask = id => {
        // Update API
    };

    const undoTask   = id => {
        // Undo Task
    };
    const deleteTask = id => {
        // Undo Task
    };

    return (
        <SemanticCard key={id} color={color} fluid>
            <SemanticCard.Content>
                <SemanticCard.Header textAlign="left">
                    <div style={{ wordWrap: "break-word"}}>{task}</div>
                </SemanticCard.Header>


                <SemanticCard.Meta textAlign="right">
                    <Icon name="check circle"
                        color="green"
                        onClick={() => updateTask(id)}
                    />
                    <span style={{ paddingRight: 10 }}>Done</span>
                    <Icon
                        name="undo"
                        color="yellow"
                        onClick={() => undoTask(id)}
                    />
                    <span style={{ paddingRight: 10 }}>Undo</span>
                    <Icon
                        name="delete"
                        color="red"
                        onClick={() => deleteTask(id)}
                    />
                    <span style={{ paddingRight: 10 }}>Delete</span>
                </SemanticCard.Meta>
            </SemanticCard.Content>
        </SemanticCard>
    );
};

export default Card;