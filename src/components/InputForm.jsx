const InputForm = ({ query, setQuery, handleSubmit }) => {
  return (
    <div className="input-form scrub-input">
      <div className="navbar-box">
        <ul className="d-row navbar">
          <li>
            <a className="nav-link phone-tab" href="#!">
              Phone
            </a>
          </li>
          <li>
            <a className="nav-link email-tab" href="/email">
              Email
            </a>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label id="num_wrap">
          <input
            id="input"
            type="text"
            name="query"
            value={query}
            placeholder="7861772343"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <p className="hidden" id="invalid">
            Invalid Number!
          </p>
        </label>
        <button id="submit" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
