import Form from 'next/form'
import { Search } from 'lucide-react'
import { SearchFormReset } from '../components/SearchFormReset';
import { Button } from './ui/button';

interface ISearchFormProps {
    query?: string
};

export const SearchForm: React.FC<ISearchFormProps> = async ({ query }: ISearchFormProps) => {
    return (
        <Form action="/" scroll={false}>
            <input name="query" defaultValue={query} className='search-input'
                placeholder="Search Startups..." />

            <div className='flex gap-2'>
                {query && <SearchFormReset />}

                <Button size="icon" type='submit' className='search-btn text-white'>
                    <Search size={25} />
                </Button>
            </div>
        </Form>
    )
};
