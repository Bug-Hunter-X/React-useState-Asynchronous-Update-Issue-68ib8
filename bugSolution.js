The solution involves using a functional update within the `useState` hook to ensure the state update is applied correctly before accessing it. This way, you're sure to get the current value in the log and the UI will properly reflect the input.

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(prevQuery => {
      const newQuery = event.target.value;
      console.log('Search Query:', newQuery); // Now correctly reflects the input
      return newQuery;
    });
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={searchQuery} />
      <p>Search Query: {searchQuery}</p>
    </div>
  );
}

export default MyComponent;
```

Alternatively, you could also achieve the desired behavior by reading the value directly from the event object in the logging statement:

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log('Search Query:', event.target.value); // Log the event value directly
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={searchQuery} />
      <p>Search Query: {searchQuery}</p>
    </div>
  );
}

export default MyComponent;
```