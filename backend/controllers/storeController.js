import asyncHandler from 'express-async-handler'
import Store from '../models/storeModel.js'

export const createStore = asyncHandler(async (req, res, next) => {
    const body = req.body;

    const store = await Store.create(body)
    return res.json(store)
})


export const getStore = asyncHandler(async (req, res, next) => {
    const store = await Store.findOne({user: req.user._id})
    if (!store) {
        res.status(404)
        throw new Error('not store found')
    }

    return res.json(store)
})


export const updateStore = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const store = req.body
    const updated = await Store.findByIdAndUpdate(id,{store}, {new: true})
    if (!updated) {
        res.status(404)
        throw new Error('no store updated')
    }

    return res.json(updated)
})