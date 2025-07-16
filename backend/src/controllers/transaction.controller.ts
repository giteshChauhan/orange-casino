import { Request, Response } from 'express';
import { Transaction } from '../models/transaction.model';
import { AuthRequest } from '../middlewares/auth.middleware';

export const getTransactions = async (req: AuthRequest, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  const [transactions, total] = await Promise.all([
    Transaction.find({ user: req.userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    Transaction.countDocuments({ user: req.userId })
  ]);

  res.json({
    page,
    limit,
    total,
    data: transactions
  });
};