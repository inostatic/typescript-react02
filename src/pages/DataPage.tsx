import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getData, searchByStrAC, selectedItemAC, sendFormAc, setItemAC, sortByAC} from '../redux/reducers/data/actionData'
import {Navbar} from "../components/Navbar/Navbar"
import {Form} from "../components/Form/Form"
import {TableHeader} from "../components/TableHeader/TableHeader"
import {TableRow} from "../components/TableRow/TableRow"
import {PaginationComponent} from "../components/Pagination/Pagination"
import {AppState} from "../redux/createStore"
import {Search} from "../components/Search/Search";
import {Loader} from "../components/Loader/Loader";
import {SelectedRow} from "../components/SelectedRow/SelectedRow";
import {sortType, ITableItem} from  "../types"
import {selectPageAC} from "../redux/reducers/select/action"

interface HeaderProps {
    location: {
        pathname: string
    }
}

export const DataPage: React.FC<HeaderProps> = ({location}) => {
    const dispatch = useDispatch()
    const {items, selectedRow, isLoaded, countItem, currentPage, countAllItems} = useSelector((state:AppState) => state.data)
    const select = useSelector((state: AppState) => state.select.select)

    useEffect(() => {
        dispatch(selectPageAC(location.pathname))
    },[])

    useEffect(() => {
        if (select) {
            dispatch(getData(select))
        }
    }, [select])

    const HandlerSearch =  React.useCallback( (str: string): void => {
        dispatch(searchByStrAC(str))
    }, [])

    const selectedItem =  React.useCallback((event: any): void => {
        let node = event.target.dataset.item || event.target.parentNode.dataset.item
        if (node) {
            dispatch(selectedItemAC(node))
        }
    }, [])

    const HandlerSort = React.useCallback((key: sortType): void => {
        dispatch(sortByAC(key))
    }, [])

    const HandlerPagination = React.useCallback((str_id: number): void => {
        dispatch(setItemAC(str_id))
    }, [])

    const HandlerForm = React.useCallback((obj: ITableItem): void => {
        dispatch(sendFormAc(obj))
    }, [])

    return (
        <div className="data">
            <Navbar/>
            {!isLoaded && select && <Loader />}
            {
                isLoaded &&
                <>
                    <Form sendForm={HandlerForm}/>
                    <TableHeader sortByKey={HandlerSort}/>
                    <div className="table__container" onClick={selectedItem}>
                        {
                            items && items
                                .map((item, index) => <TableRow {...item} key={index} selectedRow={selectedRow}/>
                                )
                        }
                    </div>
                    <Search searchByString={HandlerSearch} />
                    <PaginationComponent
                        countItem={countItem}
                        currentPage={currentPage}
                        changeCurrentPage={HandlerPagination}
                        countAllItems={countAllItems}
                    />
                    {selectedRow && <SelectedRow {...selectedRow}/>}
                </>
            }
        </div>
    )
}