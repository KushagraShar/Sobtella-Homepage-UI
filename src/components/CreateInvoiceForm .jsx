import React from 'react';
import { ChevronLeft, MoreVertical, Upload } from 'lucide-react';

const CreateInvoiceForm = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="flex items-center text-blue-600">
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span>Create New Invoice</span>
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-6">
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">Vendor Details</button>
        <button className="px-4 py-2 text-gray-500">Invoice Details</button>
        <button className="px-4 py-2 text-gray-500">Comments</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Upload Section */}
        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center space-y-4">
          <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
              <Upload className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">To auto-populate fields and save time</p>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Upload File</button>
          <p className="text-xs text-blue-600">Click to upload or Drag and drop</p>
        </div>

        {/* Right Column - Form Fields */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Vendor Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vendor *
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option>A - 1 Exterminators</option>
                </select>
                <a href="#" className="text-sm text-blue-600">View Vendor Details</a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Invoice Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purchase Order Number *
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option>Select PO Number</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Invoice Number *
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Invoice Date *
                  </label>
                  <input type="date" className="w-full border rounded-lg p-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Amount *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2">$</span>
                    <input type="number" className="w-full border rounded-lg p-2 pl-6" placeholder="0.00" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Terms *
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Select</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Expense Details */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Expense Details</h2>
              <div className="flex items-center space-x-2">
                <span>$ 0.00</span>
                <span>/</span>
                <span className="text-blue-600">$ 0.00</span>
                <div className="w-10 h-6 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Line Amount *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2">$</span>
                    <input type="number" className="w-full border rounded-lg p-2 pl-6" placeholder="0.00" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department *
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Select Department</option>
                  </select>
                </div>
              </div>

              <button className="text-blue-600 flex items-center">
                + Add Expense Coding
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Comments</h2>
            <textarea 
              className="w-full border rounded-lg p-2" 
              placeholder="Add a comment and use @Name to tag someone"
              rows={3}
            />
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center pt-4">
            <button>
              <MoreVertical className="w-6 h-6 text-gray-500" />
            </button>
            <div className="space-x-4">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Save as Draft
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Submit & New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoiceForm;