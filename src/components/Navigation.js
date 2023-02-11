import React from 'react';

const Navigation = () => {
    return (
        <nav class="bg-slate-100 shadow-md">
            <div
                class="max-w-7xl mx-auto  lg:px-0 flex justify-between  items-center"
            >
                <a href="index.html">
                    <img
                        class="h-14 w-14 ml-4"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b29igEdAiBfRVpL_rbQqpcnlPAoJiZoQbA&usqp=CAU"
                        alt=""
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navigation;