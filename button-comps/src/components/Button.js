import React from "react";

function BaseButton(props){
    return <div>
    <button>base</button>
    </div>
};

function PrimaryButton(props){
    return <div>
    <button>primary</button>
    </div>
};

function OutlineButton(props){
    return <div>
    <button>outline</button>
    </div>
};


function Button(props) {
    const isPrimary = props.buttonType
    console.log(props.buttonType);
    if(isPrimary) {
        return     <div class="col-6">
        <PrimaryButton/>
    </div>
    }
    return <>
        <div class="col-6">
        <BaseButton/>
    </div>
    </>
}

export default Button;