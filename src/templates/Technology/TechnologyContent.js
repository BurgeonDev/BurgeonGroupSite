import TechnologyData from '../../data/Technology/technology.json'
import React, {Fragment, useState} from 'react';
import Pagination from "../../components/Pagination";
import TechnologyItem from "../../components/Technology/technologyitem";
import TechnologyItemList from "../../components/Technology/technologyItemList";

const TechnologyContent = (props) => {
    return (
        <div className={props.cols + ' ' + props.classes}>
            <Fragment>
                <div className={`technology-content-wrapper ${props.technology_type === 'list' && 'technology-list'}`}>
                    <div className="row mtn-30">
                        {
                            props.technology_type === 'list' ? (
                                <div className={'col-12'}>
                                    {
                                        TechnologyData.map(technology => (
                                            <TechnologyItemList
                                                key={technology.id}
                                                id={technology.id}
                                                thumb={technology.thumb}
                                                title={technology.title}
                                            />
                                        ))
                                    }
                                </div>
                            ) : (
                                TechnologyData.map(technology => (
                                    <TechnologyItem
                                        key={technology.id}
                                        id={technology.id}
                                        cols={props.cols === 'col-12' ? 'col-md-6 col-lg-4' : 'col-md-6'}
                                        thumb={technology.thumb}
                                        title={technology.title}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>

                {/* <Pagination
                    paginate={paginate}
                    totalPosts={state.posts.length}
                    currentPage={state.currentPage}
                    postsPerPage={state.postsPerPage}
                /> */}
            </Fragment>
        </div>
    );
}

export default TechnologyContent;