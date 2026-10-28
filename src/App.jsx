import React, { useState } from 'react';
import './App.scss';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <div className="section">
      <div className="container">
        {/* Заголовок */}
        <h1 className="title">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          {selectedGood && (
            <button
              type="button"
              data-cy="ClearButton"
              className="button is-small is-danger ml-3"
              onClick={() => setSelectedGood('')}
            >
              Clear
            </button>
          )}
        </h1>

        {/* Таблиця товарів */}
        <table className="table is-fullwidth">
          <tbody>
            {goodsFromServer.map(good => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={isSelected ? 'has-background-success-light' : ''}
                >
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                  <td className="is-vcentered">
                    {!isSelected ? (
                      <button
                        type="button"
                        data-cy="AddButton"
                        className="button"
                        onClick={() => setSelectedGood(good)}
                      >
                        +
                      </button>
                    ) : (
                      <button
                        type="button"
                        data-cy="RemoveButton"
                        className="button is-info"
                        onClick={() => setSelectedGood('')}
                      >
                        -
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;