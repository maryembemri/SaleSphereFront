import {FC} from 'react'
import {ListViewProvider} from './core/ListViewProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {Form, Formik} from 'formik'
import {createSchemas, initValues} from './core/_init'
import CaisseHeader from './components/CaisseHeader'
import CaisseBody from './components/CaisseBody'

const CaisseCreate = () => {
  const onSubmit = () => {}
  return (
    <Formik initialValues={initValues} validationSchema={createSchemas} onSubmit={onSubmit}>
      {() => (
        <Form className='mx-auto w-100'>
          <CaisseHeader />
          <CaisseBody />
        </Form>
      )}
    </Formik>
  )
}

const CaisseCreateWrapper: FC = () => {
  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <CaisseCreate />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )
}

export default CaisseCreateWrapper
