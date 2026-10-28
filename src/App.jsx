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
                  <td>{good}</td>
                  <td>
                    {!isSelected ? (
                      <button
                        type="button"
                        className="button is-success is-small"
                        onClick={() => setSelectedGood(good)}
                      >
                        +
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="button is-danger is-small"
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