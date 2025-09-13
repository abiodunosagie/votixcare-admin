import MainLayout from '@/components/layout/DashboardLayout'

export default function Reports() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Reports & Insights</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            View analytics and generate reports for your practice.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
          <p className="text-gray-600 dark:text-gray-400">Reports page content coming soon...</p>
        </div>
      </div>
    </MainLayout>
  )
}