import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery,pinDetailQuery} from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = ({updateFeed,updatefeedState}) => {
  const getpins = async () => await client.fetch(feedQuery())
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  const awaitFeed = async (pinID) => {
    await new Promise(async resolve => {
      let datan = await client.fetch(pinDetailQuery(pinID))
      if(JSON.stringify(datan)!=='[]')
      {
        let data = await client.fetch(feedQuery())
        data.push(datan)
        console.log(data.length)
        setPins(data)
        setLoading(false)
        updatefeedState(null)
        resolve()
      }

    })
  }

  useEffect(async () => 
  {
    console.log('Component Render')
    if (categoryId) 
    {
        setLoading(true);
        const query = searchQuery(categoryId);
        client.fetch(query).then((data) => 
        {
          setPins(data);
          setLoading(false);
        });
      } 
    else 
    {
      setLoading(true);
      if (!pins)
      {
        console.log('1')
        let data = await client.fetch(feedQuery())
        setPins(data)
        setLoading(false)
        
        return;
      }

      if(pins && updateFeed !== null)
      {
        console.log('2')
        return await awaitFeed(updateFeed)
      }
      if(pins){
        setLoading(false)
      }
    }
      
    
  }, [pins]);
  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }
  return (
    <div>
      {pins && (
        <MasonryLayout pins={pins} />
      )}
    </div>
  );
};

export default Feed;