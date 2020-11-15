import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Card as SemanticCard, Header, Form, Input, Icon } from "semantic-ui-react";
import Card from '../Card';

var res = [{ "_id": "5fa4e7959d6607cbe682e498", "id": "000000000000000000000000", "status": false, "task": "test" }, 
{ "_id": "5fa4e7959d6607cbe682e499", "id": "000000000000000000000000", "status": false, "task": "second" }];

const ToDoList = () => {

    let endpoint = "http://localhost:8080";
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {

        if (1) {
            setItems(res.map((item, index) => {
                let color = item.status ? 'green' : 'yellow';

                return (
                    <Card key={item._id} id={item.id} color={color} task={item.task} />
                );
            }));

        } else {
            setItems([]);
        }
    };

    const onChange = value => {
        setTask(value);
    };

    const onSubmit = () => {
        // console.log("pRINTING task", this.state.task);
        if (task) {
            console.log("On Submit");
        }
    };

    return (

        <div>
            {console.log(items)}

            <div className="row">
                <Header className="header" as="h2">
                    TO DO LIST
            </Header>
            </div>
            <div className="row">
                <Form onSubmit={() => onSubmit()}>
                    <Input
                        type="text"
                        name="task"
                        onChange={(e) => onChange(e.target.value)}
                        value={task}
                        fluid
                        placeholder="Create Task"
                    />
                    {/* <Button >Create Task</Button> */}
                </Form>
            </div>
            <div className="row">
                <SemanticCard.Group>{items}</SemanticCard.Group>
            </div>
        </div>
    );

}

export default ToDoList;