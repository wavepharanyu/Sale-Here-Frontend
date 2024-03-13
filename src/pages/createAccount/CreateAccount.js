import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../actions/userActions";
import "./CreateAccount.scss";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (name !== "") {
      if (name.length === 1) {
        setShow(true);
      }
      if (name.length === 2) {
        setPauseAnimation(true)
      }
    } else {
      setShow(false);
      setPauseAnimation(false)
    }
    console.log(name.length);
  }, [name]);
  return (
    <div className="create-container">
      <p className="title">ชื่อของคุณ</p>
      <TextInput value={name} handleChange={setName} />
      {show && (
        <Link to="/home" className="button-link">
          <Button title="ยืนยัน" handleClick={() => dispatch(createUser(name))} isPaused={pauseAnimation}/>
        </Link>
      )}
    </div>
  );
};

export default CreateAccount;
