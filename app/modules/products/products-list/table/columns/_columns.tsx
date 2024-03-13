import {Column} from 'react-table'
import {ProductTaxCell} from './ProductTaxCell'
import {ProductActionsCell} from './ProductActionsCell'
import {ProductCustomHeader} from './ProductCustomHeader'
import {ProductInfoCell} from './ProductInfoCell'
import ProductStockCell from './ProductStockCell'
import {ProductPriceCell} from './ProductPriceCell'
import {ProductColorCell} from './ProductColorCell'
import {Product} from '../../../core/models'

const productsColumns: ReadonlyArray<Column<Product>> = [
  {
    Header: (props) => (
      <ProductCustomHeader tableProps={props} title='Code' className='min-w-100px' />
    ),
    id: 'code',
    accessor: (product) => product.code.toUpperCase(),
  },
  {
    Header: (props) => (
      <ProductCustomHeader tableProps={props} title='Libellé' className='min-w-200px' />
    ),
    id: 'label',
    Cell: ({...props}) => <ProductInfoCell product={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <ProductCustomHeader tableProps={props} title='En Stock' className='min-w-125px' />
    ),
    id: 'quantity',
    Cell: ({...props}) => <ProductStockCell product={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <ProductCustomHeader tableProps={props} title="Prix d'achat" className='min-w-125px' />
    ),
    id: 'price',
    Cell: ({...props}) => <ProductPriceCell value={props.data[props.row.index].price} />,
  },

  {
    Header: (props) => (
      <ProductCustomHeader tableProps={props} title='Couleur' className='min-w-125px' />
    ),
    id: 'colorId',
    Cell: ({...props}) => <ProductColorCell color={props.data[props.row.index].color} />,
  },

  {
    Header: (props) => (
      <ProductCustomHeader tableProps={props} title='TVA' className='min-w-50px' />
    ),
    id: 'vatId',
    Cell: ({...props}) => <ProductTaxCell tax={props.data[props.row.index].vat} />,
  },
  {
    Header: (props) => (
      <ProductCustomHeader tableProps={props} title='Actions' className='text-end' />
    ),
    id: 'actions',
    Cell: ({...props}) => <ProductActionsCell product={props.data[props.row.index]} />,
  },
]

export {productsColumns}
