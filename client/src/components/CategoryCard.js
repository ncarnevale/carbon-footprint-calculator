import {useState} from 'react';
import styled from 'styled-components';
import {Typography, Button} from '@mui/material';
import {KeyboardArrowUp, KeyboardArrowDown}  from '@mui/icons-material';

const CategoryCardMain = styled.div`
    border: 3px solid;
    border-radius: 5px;
    margin: 10px;
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;;
    align-items: center;
    padding: 0 20px;
`;
    
const CardContent = styled.div`
    border-top: 1px solid;
    padding: 10px;
`;

function CategoryCard({children, step, title}) {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
        <CategoryCardMain>
            <CardHeader>
                <Typography sx={{marginY: 1}} variant='h3'>{step}</Typography>
                <Typography sx={{marginY: 1}}  variant='h3'>{title}</Typography>
                <Button size='large' aria-label={isExpanded ? 'collapse' : 'expand'} onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded
                        ? <KeyboardArrowUp color="action" fontSize="large" />
                        : <KeyboardArrowDown color="action" fontSize="large" />
                    }
                </Button>
            </CardHeader>
            {isExpanded && 
                <CardContent>
                    {children}
                </CardContent>
            }
        </CategoryCardMain>
    );
  }
  
  export default CategoryCard;
  