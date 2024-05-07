"use client";
import * as SelectRdx from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

import style from "./Select.module.css";

export const Select = SelectRdx.Root;

export const SelectGroup = SelectRdx.Group;

export const SelectValue = SelectRdx.Value;

export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectRdx.Trigger>,
  ComponentPropsWithoutRef<typeof SelectRdx.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectRdx.Trigger
    {...props}
    ref={ref}
    className={`${style.trigger} ${className}`}
  >
    {children}
    <div className={style.trigger_icon}>
      <hr className={style.trigger_sep} />
      <SelectRdx.Icon asChild>
        <ChevronDownIcon />
      </SelectRdx.Icon>
    </div>
  </SelectRdx.Trigger>
));

SelectTrigger.displayName = SelectRdx.Trigger.displayName;

export const SelectScrollUpButton = forwardRef<
  ElementRef<typeof SelectRdx.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectRdx.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectRdx.ScrollUpButton
    {...props}
    ref={ref}
    className={`${style.scroll_up_btn} ${className}`}
  >
    <ChevronUpIcon />
  </SelectRdx.ScrollUpButton>
));

SelectScrollUpButton.displayName = SelectRdx.ScrollUpButton.displayName;

export const SelectScrollDownButton = forwardRef<
  ElementRef<typeof SelectRdx.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectRdx.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectRdx.ScrollDownButton
    {...props}
    ref={ref}
    className={`${style.scroll_down_btn} ${className}`}
  >
    <ChevronDownIcon />
  </SelectRdx.ScrollDownButton>
));

SelectScrollDownButton.displayName = SelectRdx.ScrollDownButton.displayName;

export const SelectContent = forwardRef<
  ElementRef<typeof SelectRdx.Content>,
  ComponentPropsWithoutRef<typeof SelectRdx.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectRdx.Portal>
    <SelectRdx.Content
      position={position}
      {...props}
      ref={ref}
      className={`${style.content} ${className}`}
    >
      <SelectScrollUpButton />
      <SelectRdx.Viewport className={style.viewport}>
        {children}
      </SelectRdx.Viewport>
      <SelectScrollDownButton />
    </SelectRdx.Content>
  </SelectRdx.Portal>
));

SelectContent.displayName = SelectRdx.Content.displayName;

export const SelectLabel = forwardRef<
  ElementRef<typeof SelectRdx.Label>,
  ComponentPropsWithoutRef<typeof SelectRdx.Label>
>(({ className, ...props }, ref) => (
  <SelectRdx.Label
    {...props}
    ref={ref}
    className={`${style.label} ${className}`}
  />
));

SelectLabel.displayName = SelectRdx.Label.displayName;

export const SelectItem = forwardRef<
  ElementRef<typeof SelectRdx.Item>,
  ComponentPropsWithoutRef<typeof SelectRdx.Item>
>(({ className, children, ...props }, ref) => (
  <SelectRdx.Item {...props} ref={ref} className={`${style.item} ${className}`}>
    <span className={style.indicator}>
      <SelectRdx.ItemIndicator>
        <CheckIcon />
      </SelectRdx.ItemIndicator>
    </span>

    <SelectRdx.ItemText>{children}</SelectRdx.ItemText>
  </SelectRdx.Item>
));

SelectItem.displayName = SelectRdx.Item.displayName;

export const SelectSeparator = forwardRef<
  ElementRef<typeof SelectRdx.Separator>,
  ComponentPropsWithoutRef<typeof SelectRdx.Separator>
>(({ className, ...props }, ref) => (
  <SelectRdx.Separator
    {...props}
    ref={ref}
    className={`${style.separator} ${className}`}
  />
));

SelectSeparator.displayName = SelectRdx.Separator.displayName;
