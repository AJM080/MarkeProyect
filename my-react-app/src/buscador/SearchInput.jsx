import styles from './styles.module.css';
import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';

function SearchInput() {

    const [search, setSearch] = useState();

    function handleSearch(event){
        setSearch(event.target.value);
    }

    return (
        <form action="">
            <div className={styles['box-search']}>
                <input type="text" value={search} onChange={handleSearch} name="search" placeholder="Buscar" className={styles['search-input']} />
                <button type="submit" className={styles['butt-submit']}><FaSearch /></button>
            </div>
        </form>
    );
}

export default SearchInput;