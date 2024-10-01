This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



import React, { useState } from 'react';
import { Select, MenuItem, Box, TreeView, TreeItem, Chip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const categories = [
  {
    category: 'Fruits',
    options: ['Apple', 'Banana', 'Mango']
  },
  {
    category: 'Vegetables',
    options: ['Carrot', 'Broccoli', 'Spinach']
  }
];

const CategorySelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setOpen(false); // Close the dropdown when an option is selected
  };

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent Select dropdown from closing when TreeItem is clicked
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <Select
        value={selectedOption}
        displayEmpty
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderValue={(selected) =>
          selected ? (
            <Chip label={selected} color="primary" />
          ) : (
            'Select an option'
          )
        }
        sx={{ width: '100%' }}
      >
        {categories.map((cat, idx) => (
          <MenuItem key={idx} value="" disableGutters onClick={handleClick}>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              <TreeItem nodeId={`category-${idx}`} label={cat.category} onClick={handleClick}>
                {cat.options.map((option, optIdx) => (
                  <TreeItem
                    key={optIdx}
                    nodeId={`${cat.category}-${optIdx}`}
                    label={option}
                    onClick={(event) => {
                      handleClick(event);
                      handleSelect(option);
                    }}
                  />
                ))}
              </TreeItem>
            </TreeView>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CategorySelect;