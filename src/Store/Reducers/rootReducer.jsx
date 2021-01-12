
const INITIAL_STATE = {
    lista: [],
};

export default function reducer ( state = INITIAL_STATE, action )
{
    if ( action.type === 'LISTAGEM' )
    {
        return {
          ...state,
          lista: action.lista
        }
    } 

   return state
}


