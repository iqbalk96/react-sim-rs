import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AppLayout } from '@/shared/components/app-layout'

const FormInpatient = lazy(
  () => import('@/features/inpatient/pages/form-inpatient')
)

const ListInpatient = lazy(
  () => import('@/features/inpatient/pages/list-inpatient')
)

const NotMatch = lazy(
  () => import('@/features/not-match/pages/NotMatch')
)

export default function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="" element={<FormInpatient />} />
        <Route path="list" element={<ListInpatient />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  )
}