const React = require("react");
function Edit({id}){
    return (
        <div>
            <h1>You are about to edit</h1>
            <p>User id:{id}</p>
        </div>
    );
}
module.exports=Edit;