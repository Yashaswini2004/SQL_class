const React = require("react");

function Users({ r }) {
    return (
        <div>
            {r.map((res, index) => (
                <div key={index}>
                 
                    <p><span>{index}.</span>User id:{res.id}</p>
                    <p>User name:{res.username}</p>
                    <form method="GET" action="/users/{res.id}/edit">
                        <button>Edit username</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

module.exports = Users;
