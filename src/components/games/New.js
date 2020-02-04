import React from 'react'

class New extends React.Component {
  state = {
    data: {
      name: '',
      year: null,
      description: '',
      minPlayers: null,
      maxPlayers: null,
      age: null,
      duration: null,
      image: '',
      boardImage: '',
      user: ''
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form className="column is-half is-offset-one-quarter">
              <h2 className="title">Add a game</h2>
              <div className="field">
                <label className="label">Name</label>
                <input className="input" name="name" placeholder="Name" />
              </div>
              <div className="field">
                <label className="label">Year</label>
                <input className="input" type="number" min="1900" max="2020" name="year" placeholder="Year" />
              </div>
              <div className="field">
                <label className="label">Description</label>
                <textarea className="textarea" name="description" placeholder="Description" />
                <small>Max 300 characters</small>
              </div>
              <div className="field">
                <label className="label">Number of players</label>
                <input className="input" type="number" min="1" name="minPlayers" placeholder="Min" />
                <span> to </span>
                <input className="input" type="number" name="maxPlayers" placeholder="Max" />
              </div>
              <div className="field">
                <label className="label">Age</label>
                <input className="input" type="number" min="1" max="18" name="age" placeholder="Age" />
              </div>
              <div className="field">
                <label className="label">Duration</label>
                <input className="input" type="number" name="duration" placeholder="Duration" />
              </div>
              <div className="field">
                <label className="label">Image URL</label>
                <input className="input" type="url" name="image" placeholder="Image URL" />
              </div>
              <div className="field">
                <label className="label">Board Image URL</label>
                <input className="input" type="url" name="boardImage" placeholder="Board Image URL" />
              </div>
              <div className="field">
                <button className="button is-fullwidth" type="submit">Add my game</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default New

// name: { type: String, required: true, unique: true },
// year: { type: Number, required: true },
// description: { type: String, required: true, maxLength: 300 },
// minPlayers: { type: Number, required: true },
// maxPlayers: { type: Number },
// age: { type: Number, required: true, min: 1, max: 18 },
// duration: { type: Number, required: true },
// image: { type: String, required: true },
// boardImage: { type: String },
// comments: [commentSchema],
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }