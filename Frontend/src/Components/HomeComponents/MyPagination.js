import React from 'react'
import { Link } from 'react-router-dom';

const MyPagination = () => {
    return (

            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item active`}>
                        <Link className='page-link' to={'/data1'}>1</Link>
                    </li>
                    <li className={`page-item`}>
                        <Link className='page-link' to={'/data1'}>2</Link>
                    </li>
                    <li className={`page-item`}>
                        <Link className='page-link' to={'/data1'}>3</Link>
                    </li>
                    <li className={`page-item`}>
                        <Link className='page-link' to={'/data1'}>4</Link>
                    </li>
                    <li className={`page-item`}>
                        <Link className='page-link' to={'/data1'}>5</Link>
                    </li>
                    <li className={`page-item`}>
                        <Link className='page-link' to={'/data1'}>Next</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default MyPagination