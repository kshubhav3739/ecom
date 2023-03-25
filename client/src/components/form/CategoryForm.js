import React from 'react'

const CategoryForm = ({ HandleSubmit, name, setName, slug }) => {
    return (
        <React.Fragment>

            <form onSubmit={HandleSubmit}>
                <div class="form-group">
                    <input class="form-control" value={name} autoFocus required placeholder={slug ? slug : "Enter Text Here"} onChange={(e) => setName(e.target.value)} />
                    <button className='btn-outline-success btn mt-3'>Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default CategoryForm