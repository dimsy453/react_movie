import css from './Header.module.css'

const Header = () => {

    return (
        <div className={css.Header}>
            <div>
                <h1>MovieDB</h1>
            </div>

            <div className={css.tools}>
                <button> Home</button>
                <button> Films</button>
                <button>Register</button>

            </div>

            <div className={css.avatar}> avatar </div>
        </div>
    );
};

export {Header}