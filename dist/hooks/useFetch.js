var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect, useCallback } from 'react';
const useFetch = (url, options = {}, initialData = null) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const response = yield fetch(url, options);
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            const json = yield response.json();
            setData(json);
            setError(null);
        }
        catch (error) {
            setError(error);
            setData(null);
        }
        finally {
            setLoading(false);
        }
    }), [url, options]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return { data, isLoading, error };
};
export default useFetch;
