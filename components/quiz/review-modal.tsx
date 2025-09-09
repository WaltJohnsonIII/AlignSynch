"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: { rating: number; comment: string }) => void;
  quizTitle: string;
}

export function ReviewModal({
  isOpen,
  onClose,
  onSubmit,
  quizTitle,
}: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0 || !comment.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onSubmit({ rating, comment });
    setIsSubmitting(false);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setRating(0);
    setComment("");
    setHoveredRating(0);
  };

  return (
    <Dialog
      data-oid="8w4.41k"
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
      open={isOpen}
    >
      <DialogContent className="sm:max-w-md" data-oid="i7q82yj">
        <DialogHeader data-oid=".oe0u09">
          <DialogTitle data-oid="b1l2suq">Write a Review</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4" data-oid="b_aj8vo">
          <div data-oid="ew7svqj">
            <h3 className="mb-2 font-medium text-sm" data-oid="a56j8-6">
              Quiz: {quizTitle}
            </h3>
          </div>

          <div className="space-y-2" data-oid="37va8by">
            <Label data-oid="o476jhg" htmlFor="rating">
              Your Rating
            </Label>
            <div className="flex items-center gap-1" data-oid="a8-1zpl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  className="focus:outline-none"
                  data-oid="_2fa4n:"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  type="button"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoveredRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    } transition-colors`}
                    data-oid="ho1dfuz"
                  />
                </button>
              ))}
            </div>
            {rating === 0 && (
              <p className="text-muted-foreground text-xs" data-oid="19_t6ey">
                Please select a rating
              </p>
            )}
          </div>

          <div className="space-y-2" data-oid="ellhv9:">
            <Label data-oid="1b73io3" htmlFor="comment">
              Your Review
            </Label>
            <Textarea
              className="min-h-[120px]"
              data-oid="qhen51q"
              id="comment"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience with this quiz..."
              value={comment}
            />

            {comment.trim() === "" && (
              <p className="text-muted-foreground text-xs" data-oid="y-lco8c">
                Please write a review
              </p>
            )}
          </div>
        </div>

        <DialogFooter data-oid="bevwei2">
          <Button data-oid="tmvc494" onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            data-oid="aoblidf"
            disabled={rating === 0 || comment.trim() === "" || isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? (
              <>
                <div
                  className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"
                  data-oid=":8va89e"
                />
                Submitting...
              </>
            ) : (
              "Submit Review"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
