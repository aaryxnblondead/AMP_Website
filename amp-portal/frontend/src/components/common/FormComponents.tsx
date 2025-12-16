import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  helperText,
  icon,
  required,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-neutral-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-3 ${icon ? 'pl-10' : ''} border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 ${
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : 'border-neutral-300 focus:ring-blue-500 focus:border-blue-500'
          } disabled:bg-neutral-50 disabled:text-neutral-500 ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <span>⚠</span>
          <span>{error}</span>
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
};

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  error,
  helperText,
  options,
  required,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-neutral-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 appearance-none bg-white ${
          error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-neutral-300 focus:ring-blue-500 focus:border-blue-500'
        } disabled:bg-neutral-50 disabled:text-neutral-500 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <span>⚠</span>
          <span>{error}</span>
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
};

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  error,
  helperText,
  required,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-neutral-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
          error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-neutral-300 focus:ring-blue-500 focus:border-blue-500'
        } disabled:bg-neutral-50 disabled:text-neutral-500 ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <span>⚠</span>
          <span>{error}</span>
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
};

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  error?: string;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          className={`mt-1 w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
        <label className="text-sm text-neutral-700 cursor-pointer flex-1">
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1 ml-7">
          <span>⚠</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
