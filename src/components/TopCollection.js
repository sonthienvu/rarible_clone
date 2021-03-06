import React from 'react'
import './assets/css/Body.css'
// import avatar from './assets/media/imgs/content/avatar_collection.png'
import dropMenuIcon from './assets/icons/angle-down-solid.svg'
import {collectors} from '../data/topCollectionItem'


function TopCollection() {

    function collectionDrop() {
        var y = document.getElementById("collection-drop");
        if (y.className === "collection-day--dropdown") {
          y.className += " collection-dropdown--enable";
        } else {
          y.className = "collection-day--dropdown";
        }
      }

    return(
        <div className="top-collection">
            <div className="top-collection-container">
                <div className="top-collection--heading">
                    <div className="top-collection--heading-left">
                    <h4>Top collection in</h4>
                        <div className="top-collection--filter" onClick={collectionDrop}>
                            <h4 > 
                            1 day
                            </h4>
                            <img style={{width: '15px'}} src={dropMenuIcon} />
                        </div>
                        
                    <div className="collection-day--dropdown" id="collection-drop">
                        <div className="collection--dropdown">
                        <p> 3 days</p>
                        <p> 7 days</p>
                        <p> 10 days</p>
                        </div>
                    </div>
                    </div>
                    <div className="top-collection--heading-right">
                    <button type="button">See all</button>
                    </div>
                </div>
                <div className="top-collection--list">
                    {collectors.map((collector, key) => {
                        return(
                            <div key={key} className={collector.itemClassName}>
                                <p>{key + 1}</p>
                                <div className={collector.avatarClassName}>
                                    <img src={collector.srcAvatar} />
                                </div>
                                <div className={collector.itemInforClassName}>
                                    <p>{collector.name}</p>
                                    <p>{collector.money}</p>
                                </div>
                            </div>
                        );
                    })}
                    
                    
                </div>
            </div>
        </div>

    
    )
}

export default TopCollection;