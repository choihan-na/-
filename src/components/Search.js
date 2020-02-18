import React from 'react';

const Search = () => {
    return (
        <div>
            <h2> 마물 어디까지 잡아 봤니? </h2>
            <form
                id="sform"
                name = "sform"
                action = "#"
                method="get">
                <input
                    type="text"
                    id = "search"
                    class = "searching"
                    name = "sf"
                    placeholder = "마물과 특수돌발을 검색해보세요" />
            </form>
         </div>   
    )
}
export default Search;